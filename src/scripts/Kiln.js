

export const firePottery = (mug, temperature) => {
   if ( temperature > 2200) {
       mug.cracked = true
   }
   else {
       mug.cracked = false
   }
   return mug
}