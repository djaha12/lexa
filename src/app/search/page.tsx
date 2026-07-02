import { Suspense } from "react";
import { SearchResults } from "@/components/SearchResults";
import { PageHero } from "@/components/PageHero";
import { getLocale } from "@/i18n/server";
import { t } from "@/i18n/strings";

export const metadata = { title: "Search" };

export default async function SearchPage() {
  const locale = await getLocale();
  return (
    <>
      <PageHero
        eyebrow={t("search.eyebrow", locale)}
        title={t("search.title", locale)}
        intro={t("search.intro", locale)}
        breadcrumbs={[{ label: "SANY", href: "/" }, { label: t("search.eyebrow", locale) }]}
      />
      <section className="section-pad bg-paper">
        <div className="container-max">
          <Suspense fallback={<p className="text-steel">…</p>}>
            <SearchResults />
          </Suspense>
        </div>
      </section>
    </>
  );
}
