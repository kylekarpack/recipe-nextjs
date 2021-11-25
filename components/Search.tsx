import { useLazyQuery, useQuery } from "@apollo/client";
import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputLeftElement, Menu, MenuItem, MenuList } from "@chakra-ui/react";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { SEARCH_RECIPES } from "utilities/queries";
import { Recipe, RecipeResults, RecipeSearchHitItem } from "utilities/types";
import Downshift, { useCombobox, resetIdCounter } from "downshift";

const itemToString = (item: RecipeSearchHitItem) => (item?._source?.title ?? "");

const Search: FunctionComponent = () => {
  const [query, setQuery] = useState("");
  const [findItems, { error, loading, data }] = useLazyQuery<RecipeResults>(SEARCH_RECIPES, {
    variables: {
      query,
      limit: 3
    }
  });

	const items = data?.search?.hits ?? [];
	resetIdCounter()

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    getInputProps,
    getComboboxProps
  } = useCombobox({
    items,
    itemToString,
		onSelectedItemChange: ({ selectedItem }) => {
			alert(selectedItem);
		},
    onInputValueChange: ({ inputValue }) => {
			findItems({
				variables: {
					query: inputValue
				}
			})
    }
  });

  if (error) {
    return <>`Error! ${error.message}`</>;
  }

  return (
    <div>
      <div {...getComboboxProps()}>
        <input {...getInputProps()} />
      </div>
      <ul {...getMenuProps()}>
        {isOpen && loading ? (
          <li>...Loading</li>
        ) : (
          isOpen &&
          items.map((item, index) => (
            <li
              style={highlightedIndex === index ? { backgroundColor: "#bde4ff" } : {}}
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              {itemToString(item)}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Search;
