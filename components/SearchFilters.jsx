import { Avatar, Box, Flex, Text, Select } from "@chakra-ui/react";
import { filterDatas, getFilterValues } from "../utils/filterData";
import { useRouter } from "next/router";
import { useState } from "react";
const SearchFilters = () => {
  const [filters, setFilters] = useState(filterDatas);
  const router = useRouter();

  const searchProperties = (filterValues) => {
    const path = router.pathname;

    const {query}  = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query });
  };

  return (
    <Flex
      bg="gray.100"
      flexWrap="wrap"
      justifyContent="center"
      gap="2"
      alignItems="center"
      p="4"
    >
      {filters.map((filterData) => (
        <Select
          key={filterData.queryName}
          placeholder={filterData.placeholder}
          width="fit-content"
          onChange={(e) =>
            searchProperties({ [filterData.queryName]: e.target.value })
          }
        >
          {filterData?.items?.map((item) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </Select>
      ))}
      ;
    </Flex>
  );
};

export default SearchFilters;
