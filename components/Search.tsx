import { useLazyQuery } from "@apollo/client";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  CircularProgress,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  ListItem,
  UnorderedList
} from "@chakra-ui/react";
import { resetIdCounter, useCombobox } from "downshift";
import { FunctionComponent } from "react";
import Router from "next/router";
import { SEARCH_RECIPES } from "utilities/queries";
import { RecipeResults, RecipeSearchHitItem } from "utilities/types";

const itemToString = (item: RecipeSearchHitItem) => item?._source?.title ?? "";

const Search: FunctionComponent = () => {
  const [findItems, { error, loading, data }] = useLazyQuery<RecipeResults>(SEARCH_RECIPES);

  const items = data?.search?.hits ?? [];
	console.log(items, loading)
  resetIdCounter();

  const { isOpen, getMenuProps, highlightedIndex, getItemProps, getInputProps, getComboboxProps } = useCombobox({
    items,
    itemToString,
    onSelectedItemChange: ({ selectedItem }) => {
      Router.push(`/recipe/${selectedItem._source.id}`)
    },
    onInputValueChange: ({ inputValue }) => {
      findItems({
        variables: {
          query: inputValue,
          limit: 3
        }
      });
    }
  });

  return (
    <Box position="relative">
      <InputGroup {...getComboboxProps()}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <InputRightElement pointerEvents="none">
          <CircularProgress size="16px" thickness="12px" hidden={!loading} isIndeterminate />
        </InputRightElement>
        <Input {...getInputProps()} />
      </InputGroup>
      <UnorderedList {...getMenuProps()} position="absolute" background="grey" left="0" right="0" paddingStart="0" listStyleType="none">
        {isOpen &&
          items.map((item, index) => (
            <ListItem
              paddingX="4"
              paddingY="2"
              cursor="pointer"
              style={highlightedIndex === index ? { backgroundColor: "#bde4ff" } : {}}
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              {itemToString(item)}
            </ListItem>
          ))}
      </UnorderedList>
    </Box>
  );
};

export default Search;
