import React, { useState, useMemo, useEffect } from "react";
import { Search, SlidersHorizontal, X, Stethoscope } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../layout/Container";
import { SectionWrapper } from "../layout/SectionWrapper";
import { DirectoryCard } from "../cards/DirectoryCard";
import { directoryItems } from "../../constants/directory";
import { fetchAllDoctors } from "../../../../services/doctorSpecialistService";
import { fetchAllNurses } from "../../../../services/nurseService";
import type { DirectoryItem } from "../../types";
import { cn } from "../../utils/cn";

type FilterTab = "All" | "Doctor" | "Nurse" | "Vendor" | "Clinic" | "Lab";

export const DirectorySearchSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");
  const [activeSpecialty, setActiveSpecialty] = useState<string>("All Specialties");
  const [searchQuery, setSearchQuery] = useState("");
  const [doctors, setDoctors] = useState<DirectoryItem[]>([]);
  const [nurses, setNurses] = useState<DirectoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  const tabs: FilterTab[] = ["All", "Doctor", "Nurse", "Vendor", "Clinic", "Lab"];

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchAllDoctors(), fetchAllNurses()])
      .then(([apiDocs, apiNurses]) => {
        const mappedDocs: DirectoryItem[] = apiDocs.map((doc) => {
          return {
            id: `doc-${doc.id}`,
            name: doc.name,
            role: "Doctor",
            specialty: doc.specialist || "General Practitioner",
            location: doc.place_of_practice || doc.city || "Malaysia",
            rating: 4.9,
            availability: "Available Today",
            image: doc.photo || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
            badge: doc.verified ? "Verified" : undefined,
            slug: doc.id.toString(),
          };
        });
        setDoctors(mappedDocs);

        const mappedNurses: DirectoryItem[] = apiNurses.map((nurse) => {
          return {
            id: `nurse-${nurse.id}`,
            name: nurse.name,
            role: "Nurse",
            specialty: nurse.experience || "Professional Home Nursing Care",
            location: nurse.city || nurse.state || "Malaysia",
            rating: 4.8,
            availability: "Available Today",
            image: nurse.photo || "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=400",
            badge: nurse.verified ? "Verified" : undefined,
            slug: nurse.id.toString(),
          };
        });
        setNurses(mappedNurses);
      })
      .catch((err) => {
        console.error("Failed to fetch directory data:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const combinedItems = useMemo(() => {
    // Exclude static doctors and static nurses, and use fetched instead
    const nonApiItems = directoryItems.filter((item) => item.role !== "Doctor" && item.role !== "Nurse");
    return [...doctors, ...nurses, ...nonApiItems];
  }, [doctors, nurses]);

  const doctorSpecialties = useMemo(() => {
    const specialtiesSet = new Set<string>();
    doctors.forEach((doc) => {
      if (doc.specialty) {
        specialtiesSet.add(doc.specialty);
      }
    });
    return ["All Specialties", ...Array.from(specialtiesSet)];
  }, [doctors]);

  const filteredItems = useMemo(() => {
    return combinedItems.filter((item) => {
      const matchesTab = activeTab === "All" || item.role === activeTab;
      const matchesSpecialty =
        activeTab !== "Doctor" ||
        activeSpecialty === "All Specialties" ||
        item.specialty === activeSpecialty;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(query) ||
        (item.specialty && item.specialty.toLowerCase().includes(query)) ||
        item.location.toLowerCase().includes(query);
      return matchesTab && matchesSpecialty && matchesSearch;
    });
  }, [combinedItems, activeTab, activeSpecialty, searchQuery]);

  // Count items per tab
  const tabCounts = useMemo(() => {
    const counts: Record<FilterTab, number> = {
      All: combinedItems.length,
      Doctor: 0,
      Nurse: 0,
      Vendor: 0,
      Clinic: 0,
      Lab: 0,
    };
    combinedItems.forEach((item) => {
      if (item.role in counts) {
        counts[item.role as FilterTab]++;
      }
    });
    return counts;
  }, [combinedItems]);

  return (
    <SectionWrapper className="bg-gradient-to-br from-purple-50/50 via-white to-purple-50/50 min-h-screen pt-28 md:pt-36">
      <Container>
        {/* ─── Hero Header with decorative elements ─── */}
        <div className="relative max-w-4xl mx-auto text-center mb-12 md:mb-16">
          {/* Decorative floating shapes — z-index layering */}
          <div className="absolute -top-8 -left-12 w-24 h-24 bg-[#2563EB]/5 rounded-2xl rotate-12 blur-sm -z-10" />
          <div className="absolute -top-4 -right-8 w-16 h-16 bg-[#EF4444]/5 rounded-xl -rotate-6 blur-sm -z-10" />
          <div className="absolute bottom-0 left-1/4 w-20 h-20 bg-purple-100/40 rounded-full blur-md -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#2563EB]/5 border border-[#2563EB]/10 text-[#2563EB] text-sm font-medium mb-6">
              <Stethoscope className="w-4 h-4" />
              Healthcare Directory
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6"
          >
            Find Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#EF4444]">
              Healthcare
            </span>{" "}
            Professional
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto"
          >
            Discover trusted doctors, nurses, pharmacies, and clinics. Book
            appointments or get emergency support instantly.
          </motion.p>
        </div>

        {/* ─── Search & Filters Bar ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto mb-10 space-y-6"
        >
          {/* Search Bar with integrated filter icon */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, specialty, or location..."
                className="w-full pl-14 pr-12 py-4 bg-white border border-gray-200/80 rounded-2xl text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#2563EB]/40 focus:shadow-[0_0_0_4px_rgba(37,99,235,0.08)] transition-all duration-300"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* ─── Role Tabs ─── */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  if (tab !== "Doctor")
                    setActiveSpecialty("All Specialties");
                }}
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border",
                  activeTab === tab
                    ? "bg-gray-900 text-white border-gray-900 shadow-lg shadow-gray-900/15"
                    : "bg-white text-gray-600 border-gray-200/80 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm"
                )}
              >
                {tab === "Vendor" ? "Pharmacy" : tab}
                <span
                  className={cn(
                    "text-[11px] px-1.5 py-0.5 rounded-md font-semibold",
                    activeTab === tab
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-gray-500"
                  )}
                >
                  {tabCounts[tab]}
                </span>
              </button>
            ))}
          </div>

          {/* ─── Doctor Specialty Sub-filter ─── */}
          <AnimatePresence>
            {activeTab === "Doctor" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="flex items-center gap-3 py-3 px-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-2 text-gray-400 shrink-0">
                    <SlidersHorizontal className="w-4 h-4" />
                    <span className="text-xs font-medium uppercase tracking-wider">
                      Specialist
                    </span>
                  </div>
                  <div className="w-px h-5 bg-gray-200" />
                  <div className="flex flex-wrap gap-1.5">
                    {doctorSpecialties.map((specialty) => (
                      <button
                        key={specialty}
                        onClick={() => setActiveSpecialty(specialty)}
                        className={cn(
                          "px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-200",
                          activeSpecialty === specialty
                            ? "bg-[#2563EB] text-white shadow-sm shadow-[#2563EB]/20"
                            : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                        )}
                      >
                        {specialty}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ─── Results Count ─── */}
        <div className="max-w-5xl mx-auto mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-700">
              {filteredItems.length}
            </span>{" "}
            results
            {activeTab !== "All" && (
              <>
                {" "}
                in{" "}
                <span className="font-semibold text-gray-700">
                  {activeTab === "Vendor" ? "Pharmacy" : activeTab}
                </span>
              </>
            )}
            {activeTab === "Doctor" &&
              activeSpecialty !== "All Specialties" && (
                <>
                  {" "}
                  ·{" "}
                  <span className="text-[#2563EB] font-medium">
                    {activeSpecialty}
                  </span>
                </>
              )}
          </p>
        </div>

        {/* ─── Results Grid with z-index stacking ─── */}
        {loading ? (
          <div className="relative max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white/40 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-sm animate-pulse space-y-4"
                >
                  <div className="aspect-[4/3] w-full bg-gray-200/60 rounded-xl" />
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200/60 rounded w-2/3" />
                    <div className="h-3 bg-gray-200/60 rounded w-1/2" />
                    <div className="h-8 bg-gray-200/60 rounded-lg w-full mt-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : filteredItems.length > 0 ? (
          <div className="relative">
            {/* Decorative background elements for depth */}
            <div className="absolute -top-10 left-1/3 w-64 h-64 bg-[#2563EB]/3 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
              {filteredItems.map((item, i) => (
                <DirectoryCard
                  key={item.id}
                  item={item}
                  index={i}
                />
              ))}
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100"
          >
            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-5">
              <Search className="w-7 h-7 text-gray-300" />
            </div>
            <p className="text-lg text-gray-600 font-medium">
              No results found
              {searchQuery && (
                <>
                  {" "}
                  for "<span className="text-gray-900">{searchQuery}</span>"
                </>
              )}
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Try adjusting your search or filter criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveTab("All");
                setActiveSpecialty("All Specialties");
              }}
              className="mt-6 px-5 py-2 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-[#2563EB]/20 hover:text-[#2563EB] transition-all duration-300"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}
      </Container>
    </SectionWrapper>
  );
};
