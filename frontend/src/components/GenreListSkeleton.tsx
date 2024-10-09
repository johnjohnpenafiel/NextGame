import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <ListItem paddingY="10px">
      <SkeletonText mt="3" noOfLines={1} spacing="2" skeletonHeight="2" />
    </ListItem>
  );
};

export default GenreListSkeleton;
