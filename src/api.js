export const fetchData = async () => {
   try {
      const response = await fetch("https://itunes.apple.com/search?term=jack+johnson&limit=25");
      const data = await response.json();
      console.log(data);
      return data;
   } catch (e) {
      console.log(e);
   }
};
