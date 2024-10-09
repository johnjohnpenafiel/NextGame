import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <ListItem paddingY="10px">
      <HStack>
        <SkeletonCircle />
        <SkeletonText
          noOfLines={1}
          spacing="2"
          skeletonHeight="2"
          width="100px"
        />
      </HStack>
    </ListItem>
  );
};

export default GenreListSkeleton;
