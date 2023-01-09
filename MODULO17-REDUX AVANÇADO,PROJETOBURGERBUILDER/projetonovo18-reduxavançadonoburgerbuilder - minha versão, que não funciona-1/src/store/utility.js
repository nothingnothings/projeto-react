export const updateObject = (oldObject, updatedValues) => {
    console.log(oldObject);
    console.log(updatedValues);
    return {
        
        ...oldObject,
        ...updatedValues
    }
};