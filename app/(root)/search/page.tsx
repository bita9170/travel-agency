import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";
import Options from "@/components/header/Options";
import { searchAllLocations } from "@/controllers/tripadvisorController";
import { LocationDetails } from "@/lib/class/location";

async function SaerchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  const query =
    typeof searchParams.query === "string" ? searchParams.query : undefined;

  const locations: LocationDetails[] | undefined = query
    ? await searchAllLocations(query)
    : undefined;

  return (
    <>
      <Options />
      <MaxLimitWrapper>
        <div>
          {!query && (
            <h3 className="text-center my-10">
              Please enter a search query to find locations.
            </h3>
          )}
          {query && locations && locations.length === 0 && (
            <p>No results found for "{query}".</p>
          )}
          {query && locations && locations.length > 0 && (
            // TODO: Add layout 2 or another layout that do you want
            <ul>
              {locations.map((location: LocationDetails, index: number) => (
                <li key={index}>{location.getName()}</li>
              ))}
            </ul>
          )}
        </div>
      </MaxLimitWrapper>
    </>
  );
}

export default SaerchPage;
