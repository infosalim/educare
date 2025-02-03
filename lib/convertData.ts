interface MongoDocument {
  _id: any; // MongoDB documents have an `_id` field
  [key: string]: any; // Allow any other fields
}

interface TransformedDocument {
  id: string; // The transformed `id` field
  [key: string]: any; // Allow any other fields
}

export const replaceMongoIdInArray = (
  array: MongoDocument[]
): TransformedDocument[] => {
  const mappedArray = array
    .map((item) => {
      return {
        id: item._id.toString(), // Convert `_id` to `id` as a string
        ...item, // Spread the rest of the fields
      };
    })
    .map(({ _id, ...rest }) => rest); // Remove the `_id` field

  return mappedArray;
};

export const replaceMongoIdInObject = (
  obj: MongoDocument
): TransformedDocument => {
  const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() }; // Convert `_id` to `id` and remove `_id`
  return updatedObj;
};
