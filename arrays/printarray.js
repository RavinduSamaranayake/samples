let nums = []
nums[0] = 5
nums[99] = 8
console.log(nums.length)
console.log('--------------------------------------print values---------------------------------------------')
for(let n of nums){
    console.log(n)
}
console.log('-----------------------------------print values in key------------------------------------------------')
for(let key in nums){
    console.log(key,'---',nums[key])
}
