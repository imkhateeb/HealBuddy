export const states = () => {
   const activeStates = ['Bihar', 'Rajasthan', 'Jharkhand', 'Uttar Pradesh'];
   return activeStates;
}

export const districts = (state) => {
   if (state === 'Bihar') {
      const activeDistricts = ['Patna', 'Gaya', 'Araria', 'Purnea', 'Katihaar'];
      return activeDistricts;
   }
   if (state === 'Uttar Pradesh'){
      const activeDistricts = ['Khushi Nagar', 'Agra', 'Kanpur', 'Lucknow'];
      return activeDistricts;
   }
   if (state === 'Rajasthan'){
      const activeDistricts = ['Jaipur', 'Jaisalmer'];
      return activeDistricts;
   }
   if (state === 'Jharkhand'){
      const activeDistricts = ['Ranchi', 'Namkum', 'Jamshedpur', 'Bokaro'];
      return activeDistricts;
   }
}