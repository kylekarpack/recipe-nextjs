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
import { debounce } from "lodash";

const itemToString = (item: RecipeSearchHitItem) => item?._source?.title ?? "";

const Search: FunctionComponent = () => {
  const [findItems, { loading, data }] = useLazyQuery<RecipeResults>(SEARCH_RECIPES);
  const findItemsDebounced = debounce(findItems, 250);
  const items = data?.search?.hits ?? [];
  resetIdCounter();

  const { isOpen, getMenuProps, highlightedIndex, getItemProps, getInputProps, getComboboxProps } = useCombobox({
    items,
    itemToString,
    onSelectedItemChange: ({ selectedItem }) => {
      Router.push(`/recipe/${selectedItem._source.id}`);
    },
    onInputValueChange: ({ inputValue }) => {
      findItemsDebounced({
        variables: {
          query: inputValue,
          limit: 5
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
      <UnorderedList
        {...getMenuProps()}
        position="absolute"
        background="white"
        left="0"
        right="0"
        paddingStart="0"
        listStyleType="none">
        {isOpen &&
          items.map((item, index) => (
            <ListItem
              paddingX="4"
              paddingY="2"
              cursor="pointer"
              style={highlightedIndex === index ? { backgroundColor: "#bde4ff" } : {}}
              key={`${item?._source?.id}`}
              {...getItemProps({ item, index })}>
              {itemToString(item)}
            </ListItem>
          ))}
      </UnorderedList>
    </Box>
  );
};

export default Search;
