import { CloseCircle, SearchNormal1 } from "iconsax-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { formUrlQuery, removeUrlQuery } from "@/utils";

type SearchProps = {
  icon?: boolean;
  containerClasses?: string;
  inputClasses?: string;
  closeModal?: () => void;
  mode: "Enter" | "Write";
  query?: string;
};

const Search = ({
  icon = true,
  containerClasses,
  inputClasses,
  closeModal,
  mode,
  query,
}: SearchProps) => {
  // input value
  const [searchValue, setSearchValue] = useState<string>("");

  // router
  const router = useRouter();

  // searchParams
  const searchParams = useSearchParams();

  // input change handler
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // input click handler only work for (mode === Enter)
  const handleInputClick = (e: any) => {
    if (e.key === "Enter") {
      if (mode === "Enter") {
        closeModal && closeModal();
        router.push(`/food/${searchValue}`);
      }
    }
  };

  // set and remove value to query only work for (mode === Write)
  useEffect(() => {
    if (mode === "Write") {
      const debounceFn = setTimeout(() => {
        // add query to url
        if (searchValue) {
          const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: query!,
            value: searchValue,
          });

          router.push(newUrl);
        } else {
          // remove query to url
          const newUrl = removeUrlQuery({
            params: searchParams.toString(),
            key: query!,
          });
          router.push(newUrl);
        }
      }, 300);
      return () => clearTimeout(debounceFn);
    }
  }, [searchValue, mode, router, searchParams, query]);

  // clear input value
  const handleRemoveAllText = () => {
    setSearchValue("");
  };

  return (
    <div
      className={`div-gray-outline group flex items-center justify-between rounded-8 ${containerClasses}`}
    >
      {searchValue.length > 0 && (
        <button onClick={handleRemoveAllText}>
          <CloseCircle className="ml-2 text-black" />
        </button>
      )}
      <input
        type="text"
        value={searchValue}
        onKeyDown={handleInputClick}
        onChange={handleSearchInput}
        className={`caption-lg h-full w-full outline-none ${inputClasses}`}
        placeholder="جستجو"
      />
      {icon && (
        <button onClick={handleInputClick} className="mr-2">
          <SearchNormal1 />
        </button>
      )}
    </div>
  );
};

export default Search;
