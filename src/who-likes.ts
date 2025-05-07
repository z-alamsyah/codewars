/**
 
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

 */

export function whoLikes(persons: string[]): string {
  let result = "no one likes this";
  const likeCounts = persons.length;
  if (!likeCounts) {
    return result;
  }

  switch (likeCounts) {
    case 1:
      result = persons[0] + " likes this";
      break;
    case 2:
      result = `${persons[0]} and ${persons[1]} likes this`;
      break;
    case 3:
      result = `${persons[0]}, ${persons[1]} and ${persons[2]} likes this`;
      break;
    default:
      result = `${persons[0]}, ${persons[1]} and ${
        likeCounts - 2
      } others likes this`;
      break;
  }

  return result;
}
