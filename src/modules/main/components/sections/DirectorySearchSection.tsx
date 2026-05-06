import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Container } from "../layout/Container";
import { SectionWrapper } from "../layout/SectionWrapper";
import { DirectoryCard } from "../cards/DirectoryCard";
import { directoryItems } from "../../constants/directory";
import { cn } from "../../utils/cn";

type FilterTab = "All" | "Doctor" | "Nurse" | "Vendor" | "Clinic";

export const DirectorySearchSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs: FilterTab[] = ["All", "Doctor", "Nurse", "Vendor", "Clinic"];

  const filteredItems = useMemo(() => {
    return directoryItems.filter((item) => {
      const matchesTab = activeTab === "All" || item.role === activeTab;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(query) ||
        (item.specialty && item.specialty.toLowerCase().includes(query)) ||
        item.location.toLowerCase().includes(query);
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <SectionWrapper className="bg-[#F5F5F2] min-h-screen pt-32 md:pt-40">
      <Container>
        {/* Header Area */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#111111] tracking-tight leading-[1.1] mb-6">
            Find Your Healthcare Professional
          </h1>
          <p className="text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto">
            Discover trusted doctors, nurses, pharmacies, and clinics. Book
            appointments or get emergency support instantly.
          </p>
        </div>

        {/* Search and Filter Area */}
        <div className="max-w-5xl mx-auto mb-16 space-y-8">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-full">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#999999]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, specialty, or location..."
              className="w-full pl-14 pr-8 py-5 bg-white border border-[rgba(0,0,0,0.06)] rounded-full text-base text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#1D4ED8]/30 focus:shadow-[0_0_0_4px_rgba(29,78,216,0.08)] transition-all duration-300"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border",
                  activeTab === tab
                    ? "bg-[#111111] text-white border-[#111111] shadow-lg shadow-black/10"
                    : "bg-white text-[#666666] border-[rgba(0,0,0,0.06)] hover:border-[rgba(0,0,0,0.15)] hover:text-[#111111]"
                )}
              >
                {tab === "Vendor" ? "Pharmacy" : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredItems.map((item, i) => (
              <DirectoryCard key={item.id} item={item} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/50 rounded-[32px] border border-[rgba(0,0,0,0.04)]">
            <p className="text-lg text-[#666666] font-medium">
              No results found for "{searchQuery}"
            </p>
            <p className="text-sm text-[#999999] mt-2">
              Try adjusting your search or filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveTab("All");
              }}
              className="mt-6 px-6 py-2 rounded-full border border-[rgba(0,0,0,0.1)] text-sm font-medium text-[#111111] hover:bg-black/5 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </Container>
    </SectionWrapper>
  );
};
