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
  UnorderedList,
  useColorModeValue
} from "@chakra-ui/react";
import { resetIdCounter, useCombobox } from "downshift";
import { debounce } from "lodash";
import Router from "next/router";
import { FunctionComponent } from "react";
import { SEARCH_RECIPES } from "lib/queries";
import { RecipeResults, RecipeSearchHitItem } from "lib/types";

const itemToString = (item: RecipeSearchHitItem) => item?._source?.title ?? "";

/**
 * Autocomplete for recipes
 */
const Search: FunctionComponent = () => {
  const [findItems, { loading, data }] = useLazyQuery<RecipeResults>(SEARCH_RECIPES);
  const findItemsDebounced = debounce(findItems, 250);
  const items = data?.search?.hits ?? [];
  resetIdCounter();

  const { isOpen, getMenuProps, highlightedIndex, getItemProps, getInputProps, getComboboxProps, selectItem } =
    useCombobox({
      items,
      itemToString,
      onSelectedItemChange: ({ selectedItem }) => {
        if (selectedItem) {
          Router.push(`/recipe/${selectedItem._source.id}`);
          selectItem(null);
        }
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

  const highlightedItemBackground = useColorModeValue("gray.200", "gray.700");

  return (
    <Box position="relative" mr="2">
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
        background={useColorModeValue("white", "gray.900")}
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
              background={highlightedIndex === index ? highlightedItemBackground : ""}
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
