import { Suspense } from "react";
import { SearchResults } from "@/components/SearchResults";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "Search" };

export default function SearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Search"
        title="Find your machine"
        intro="Search the full catalogue by model, category or keyword."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Search" }]}
      />
      <section className="section-pad bg-paper">
        <div className="container-max">
          <Suspense fallback={<p className="text-steel">Loading…</p>}>
            <SearchResults />
          </Suspense>
        </div>
      </section>
    </>
  );
}
