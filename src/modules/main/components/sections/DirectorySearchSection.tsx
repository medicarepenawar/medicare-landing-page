import React, { useState, useMemo, useEffect } from "react";
import { Search, SlidersHorizontal, X, Stethoscope, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../layout/Container";
import { SectionWrapper } from "../layout/SectionWrapper";
import { DirectoryCard } from "../cards/DirectoryCard";
import { directoryItems } from "../../constants/directory";
import { fetchAllDoctors } from "../../../../services/doctorSpecialistService";
import { fetchAllNurses } from "../../../../services/nurseService";
import { fetchAllClinics } from "../../../../services/clinicService";
import { fetchAllLabs } from "../../../../services/labService";
import { fetchAllTherapists } from "../../../../services/therapistService";
import { fetchAllAmbulances } from "../../../../services/ambulanceService";
import type { DirectoryItem } from "../../types";
import { cn } from "../../utils/cn";

type FilterTab = "All" | "Doctor" | "Nurse" | "Vendor" | "Clinic" | "Lab" | "Therapist" | "Ambulance";

interface DirectorySearchSectionProps {
  fixedTab?: FilterTab;
}

const categoryMetadata: Record<FilterTab, { title: React.ReactNode; subtitle: string; badge: string }> = {
  All: {
    title: (
      <>
        Find Your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#EF4444]">
          Healthcare
        </span>{" "}
        Professional
      </>
    ),
    subtitle: "Discover trusted doctors, nurses, pharmacies, and clinics. Book appointments or get emergency support instantly.",
    badge: "Healthcare Directory",
  },
  Doctor: {
    title: (
      <>
        Find Your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#EF4444]">
          Specialist
        </span>{" "}
        Doctor
      </>
    ),
    subtitle: "Discover trusted specialist doctors across multiple fields of practice. Book professional consultations today.",
    badge: "Doctor Directory",
  },
  Nurse: {
    title: (
      <>
        Find Your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#EF4444]">
          Professional
        </span>{" "}
        Nurse
      </>
    ),
    subtitle: "Discover trusted, verified home care nurses and medical assistants. Book professional nursing care.",
    badge: "Nurse Directory",
  },
  Therapist: {
    title: (
      <>
        Find Your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#EF4444]">
          Professional
        </span>{" "}
        Therapist
      </>
    ),
    subtitle: "Discover trusted, verified home care therapists and rehabilitation experts. Book professional therapy care.",
    badge: "Therapist Directory",
  },
  Vendor: {
    title: (
      <>
        Find Your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#EF4444]">
          Trusted
        </span>{" "}
        Pharmacy
      </>
    ),
    subtitle: "Locate local pharmacies and retail healthcare vendors. Get your prescription filled or purchase healthcare items.",
    badge: "Pharmacy Directory",
  },
  Clinic: {
    title: (
      <>
        Find Your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#EF4444]">
          Nearest
        </span>{" "}
        Clinic
      </>
    ),
    subtitle: "Locate medical clinics and healthcare centers. Find verified clinics near you for general checkups and consultations.",
    badge: "Clinic Directory",
  },
  Lab: {
    title: (
      <>
        Find Your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#EF4444]">
          Diagnostic
        </span>{" "}
        Lab
      </>
    ),
    subtitle: "Locate professional laboratory services and diagnostic centers. Get accurate medical tests and results.",
    badge: "Lab Directory",
  },
  Ambulance: {
    title: (
      <>
        Find Your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#EF4444]">
          Emergency
        </span>{" "}
        Ambulance
      </>
    ),
    subtitle: "Locate professional 24/7 ambulance and medical evacuation services near you.",
    badge: "Ambulance Directory",
  },
};

export const DirectorySearchSection: React.FC<DirectorySearchSectionProps> = ({ fixedTab }) => {
  const [activeTab, setActiveTab] = useState<FilterTab>(fixedTab || "All");
  const [activeSpecialty, setActiveSpecialty] = useState<string>("All Specialties");
  const [searchQuery, setSearchQuery] = useState("");
  const [doctors, setDoctors] = useState<DirectoryItem[]>([]);
  const [nurses, setNurses] = useState<DirectoryItem[]>([]);
  const [clinics, setClinics] = useState<DirectoryItem[]>([]);
  const [labs, setLabs] = useState<DirectoryItem[]>([]);
  const [therapists, setTherapists] = useState<DirectoryItem[]>([]);
  const [ambulances, setAmbulances] = useState<DirectoryItem[]>([]);
  const [doctorTypeFilter, setDoctorTypeFilter] = useState<"all" | "specialist" | "non-specialist">("all");
  const [loadingDoctors, setLoadingDoctors] = useState(true);
  const [loadingOthers, setLoadingOthers] = useState(true);

  const loading = loadingDoctors || loadingOthers;

  const tabs: FilterTab[] = ["All", "Doctor", "Nurse", "Therapist", "Vendor", "Clinic", "Lab", "Ambulance"];

  // Fetch all non-doctor directories once on mount
  useEffect(() => {
    setLoadingOthers(true);
    Promise.all([fetchAllNurses(), fetchAllClinics(), fetchAllLabs(), fetchAllTherapists(), fetchAllAmbulances()])
      .then(([apiNurses, apiClinics, apiLabs, apiTherapists, apiAmbulances]) => {
        const uniqueNurses = apiNurses.filter(
          (nurse, index, self) => self.findIndex((n) => n.id === nurse.id) === index
        );
        const mappedNurses: DirectoryItem[] = uniqueNurses.map((nurse) => {
          return {
            id: `nurse-${nurse.id}`,
            name: nurse.name,
            role: "Nurse",
            specialty: nurse.experience || undefined,
            location: nurse.city || nurse.state || "Malaysia",
            rating: 4.8,
            availability: "Available Today",
            image: nurse.photo || "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=400",
            badge: nurse.verified ? "Verified" : undefined,
            slug: nurse.slug || nurse.id.toString(),
          };
        });
        setNurses(mappedNurses);

        const uniqueClinics = apiClinics.filter(
          (clinic, index, self) => self.findIndex((c) => c.id === clinic.id) === index
        );
        const mappedClinics: DirectoryItem[] = uniqueClinics.map((clinic) => {
          return {
            id: `clinic-${clinic.id}`,
            name: clinic.vendor?.name || "Medicare Affiliated Clinic",
            role: "Clinic",
            specialty: undefined,
            location: clinic.vendor?.address?.street || "Malaysia",
            rating: 4.9,
            availability: clinic.is_available ? "Available Today" : "Temporarily Closed",
            image: clinic.vendor?.photo || "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
            badge: clinic.vendor?.verified ? "Verified" : undefined,
            slug: clinic.slug || clinic.vendor?.slug || clinic.id.toString(),
          };
        });
        setClinics(mappedClinics);

        const uniqueLabs = apiLabs.filter(
          (lab, index, self) => self.findIndex((l) => l.id === lab.id) === index
        );
        const mappedLabs: DirectoryItem[] = uniqueLabs.map((lab) => {
          return {
            id: `lab-${lab.id}`,
            name: lab.name,
            role: "Lab",
            specialty: lab.description || undefined,
            location: lab.address?.street || "Malaysia",
            rating: 4.8,
            availability: lab.is_available ? "Available Today" : "Temporarily Closed",
            image: (lab.photo && lab.photo[0]) || "https://images.unsplash.com/photo-1579165466521-35b38d326e0e?auto=format&fit=crop&q=80&w=400",
            badge: lab.verified ? "Verified" : undefined,
            slug: lab.slug || lab.id.toString(),
          };
        });
        setLabs(mappedLabs);

        const uniqueTherapists = apiTherapists.filter(
          (therapist, index, self) => self.findIndex((t) => t.id === therapist.id) === index
        );
        const mappedTherapists: DirectoryItem[] = uniqueTherapists.map((therapist) => {
          return {
            id: `therapist-${therapist.id}`,
            name: therapist.name,
            role: "Therapist",
            specialty: therapist.experience || undefined,
            location: therapist.city || therapist.state || "Malaysia",
            rating: 4.8,
            availability: "Available Today",
            image: therapist.photo || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400",
            badge: therapist.verified ? "Verified" : undefined,
            slug: therapist.slug || therapist.id.toString(),
          };
        });
        setTherapists(mappedTherapists);

        const uniqueAmbulances = apiAmbulances.filter(
          (ambulance, index, self) => self.findIndex((a) => a.id === ambulance.id) === index
        );
        const mappedAmbulances: DirectoryItem[] = uniqueAmbulances.map((ambulance) => {
          const vendor = ambulance.vendor;
          return {
            id: `ambulance-${ambulance.id}`,
            name: vendor?.name || "Medicare Affiliated Ambulance Service",
            role: "Ambulance",
            specialty: vendor?.description || undefined,
            location: vendor?.address?.city || vendor?.address?.state || "Malaysia",
            rating: 4.8,
            availability: ambulance.is_available ? "Available Today" : "Temporarily Closed",
            image: vendor?.photo || "https://images.unsplash.com/photo-1587113997559-018787fdeab6?auto=format&fit=crop&q=80&w=400",
            badge: vendor?.verified ? "Verified" : undefined,
            slug: vendor?.slug || ambulance.id.toString(),
          };
        });
        setAmbulances(mappedAmbulances);
      })
      .catch((err) => {
        console.error("Failed to fetch other directory data:", err);
      })
      .finally(() => {
        setLoadingOthers(false);
      });
  }, []);

  // Fetch doctors dynamically when doctorTypeFilter changes
  useEffect(() => {
    setLoadingDoctors(true);
    const isSpecialistParam =
      doctorTypeFilter === "specialist"
        ? true
        : doctorTypeFilter === "non-specialist"
        ? false
        : undefined;

    fetchAllDoctors(isSpecialistParam)
      .then((apiDocs) => {
        const uniqueDocs = apiDocs.filter(
          (doc, index, self) => self.findIndex((d) => d.id === doc.id) === index
        );
        const mappedDocs: DirectoryItem[] = uniqueDocs.map((doc) => {
          return {
            id: `doc-${doc.id}`,
            name: doc.name,
            role: "Doctor",
            specialty: doc.specialist || undefined,
            location: doc.place_of_practice || doc.city || "Malaysia",
            rating: 4.9,
            availability: "Available Today",
            image: doc.photo || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
            badge: doc.verified ? "Verified" : undefined,
            slug: doc.slug || doc.id.toString(),
          };
        });
        setDoctors(mappedDocs);
        setActiveSpecialty("All Specialties");
      })
      .catch((err) => {
        console.error("Failed to fetch doctors:", err);
      })
      .finally(() => {
        setLoadingDoctors(false);
      });
  }, [doctorTypeFilter]);

  useEffect(() => {
    if (fixedTab) {
      setActiveTab(fixedTab);
    }
  }, [fixedTab]);

  const combinedItems = useMemo(() => {
    // Exclude static doctors, static nurses, static clinics, static labs, static therapists, and static ambulances, and use fetched instead
    const nonApiItems = directoryItems.filter(
      (item) => item.role !== "Doctor" && item.role !== "Nurse" && item.role !== "Clinic" && item.role !== "Lab" && item.role !== "Therapist" && item.role !== "Ambulance"
    );
    return [...doctors, ...nurses, ...clinics, ...labs, ...therapists, ...ambulances, ...nonApiItems];
  }, [doctors, nurses, clinics, labs, therapists, ambulances]);

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

  const tabCounts = useMemo(() => {
    const counts: Record<FilterTab, number> = {
      All: combinedItems.length,
      Doctor: 0,
      Nurse: 0,
      Vendor: 0,
      Clinic: 0,
      Lab: 0,
      Therapist: 0,
      Ambulance: 0,
    };
    combinedItems.forEach((item) => {
      if (item.role in counts) {
        counts[item.role as FilterTab]++;
      }
    });
    return counts;
  }, [combinedItems]);

  const currentMeta = categoryMetadata[activeTab] || categoryMetadata.All;

  return (
    <SectionWrapper className="bg-gradient-to-br from-purple-50/50 via-white to-purple-50/50 min-h-screen pt-28 md:pt-36">
      <Container>
        {/* Back to main directory breadcrumb if on a fixed category page */}
        {fixedTab && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl mx-auto mb-8"
          >
            <Link
              to="/main"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#2563EB] font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Medical Directory
            </Link>
          </motion.div>
        )}

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
              {currentMeta.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6"
          >
            {currentMeta.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto"
          >
            {currentMeta.subtitle}
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
          {!fixedTab && (
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
          )}

          {/* ─── Doctor Classification & Specialty Sub-filters ─── */}
          <AnimatePresence>
            {activeTab === "Doctor" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="flex flex-col gap-4 py-4 px-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm">
                  {/* Doctor Classification Toggle */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 text-gray-400 shrink-0">
                      <Stethoscope className="w-[18px] h-[18px] text-gray-400" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Doctor Classification
                      </span>
                    </div>
                    <div className="w-px h-5 bg-gray-200 hidden sm:block" />
                    <div className="flex rounded-xl bg-gray-100/80 p-1 border border-gray-200/30">
                      <button
                        onClick={() => setDoctorTypeFilter("all")}
                        className={cn(
                          "px-4 py-1.5 rounded-lg text-xs font-medium transition-all duration-300",
                          doctorTypeFilter === "all"
                            ? "bg-gray-900 text-white shadow-md font-semibold scale-[1.02]"
                            : "text-gray-500 hover:text-gray-700 hover:bg-gray-200/50"
                        )}
                      >
                        All Doctors
                      </button>
                      <button
                        onClick={() => setDoctorTypeFilter("specialist")}
                        className={cn(
                          "px-4 py-1.5 rounded-lg text-xs font-medium transition-all duration-300",
                          doctorTypeFilter === "specialist"
                            ? "bg-[#2563EB] text-white shadow-md font-semibold scale-[1.02]"
                            : "text-gray-500 hover:text-gray-700 hover:bg-gray-200/50"
                        )}
                      >
                        Specialist Doctor
                      </button>
                      <button
                        onClick={() => setDoctorTypeFilter("non-specialist")}
                        className={cn(
                          "px-4 py-1.5 rounded-lg text-xs font-medium transition-all duration-300",
                          doctorTypeFilter === "non-specialist"
                            ? "bg-gray-900 text-white shadow-md font-semibold scale-[1.02]"
                            : "text-gray-500 hover:text-gray-700 hover:bg-gray-200/50"
                        )}
                      >
                        Not Specialist
                      </button>
                    </div>
                  </div>

                  {/* Specialty Sub-filters (Only relevant when not selecting non-specialist) */}
                  {doctorTypeFilter !== "non-specialist" && doctorSpecialties.length > 1 && (
                    <div className="flex flex-col gap-2 pt-3 border-t border-gray-100">
                      <div className="flex items-start sm:items-center flex-col sm:flex-row gap-3">
                        <div className="flex items-center gap-2 text-gray-400 shrink-0">
                          <SlidersHorizontal className="w-4 h-4 text-gray-400" />
                          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Specialty
                          </span>
                        </div>
                        <div className="w-px h-5 bg-gray-200 hidden sm:block" />
                        <div className="flex flex-wrap gap-1.5">
                          {doctorSpecialties.map((specialty) => (
                            <button
                              key={specialty}
                              onClick={() => setActiveSpecialty(specialty)}
                              className={cn(
                                "px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-200 border",
                                activeSpecialty === specialty
                                  ? "bg-[#2563EB]/10 text-[#2563EB] border-[#2563EB]/30 shadow-sm font-semibold"
                                  : "bg-white text-gray-500 border border-gray-200/80 hover:text-gray-700 hover:border-gray-300"
                              )}
                            >
                              {specialty}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
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
