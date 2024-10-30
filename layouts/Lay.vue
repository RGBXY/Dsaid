<template>
  <div class="bg-[#fafafc] min-h-screen flex">
    <div class="sticky w-[20%] left-0 top-0 p-3.5 h-screen bg-white border-r border-gray-300">
      <img class="w-12 border mb-4 border-slate-400 h-12 rounded-md" src="https://eswpcd25uod.exactdn.com/blog/wp-content/uploads/2017/05/01-1024x1024.jpg?strip=all&lossy=1&ssl=1" alt="" />
      <div class="mb-4">
        <div class="h-11 px-3 bg-white mb-2 rounded-lg border border-slate-300 shadow flex items-center gap-2">
          <PhosphorIconHouse weight="fill" class="text-lg" />
          <p class="font-semibold text-sm">Home</p>
        </div>
        <div class="h-11 px-3 rounded-lg flex items-center gap-2">
          <PhosphorIconMagnifyingGlass class="text-lg" />
          <p class="font-semibold text-sm">Explore</p>
        </div>
        <div class="h-11 px-3 rounded-lg flex items-center gap-2">
          <PhosphorIconBookBookmark class="text-lg" />
          <p class="font-semibold text-sm">Bookmark</p>
        </div>
      </div>
      <div>
        <div class="mb-1 flex items-center gap-2">
          <p class="font-bold text-lg">Popular Topics</p>
        </div>
        <div class="h-11 px-3 rounded-lg flex items-center gap-2">
          <PhosphorIconGameController class="text-lg" />
          <p class="font-semibold text-sm">Game</p>
        </div>
        <div class="h-11 px-3 rounded-lg flex items-center gap-2">
          <PhosphorIconPalette class="text-lg" />
          <p class="font-semibold text-sm">Design</p>
        </div>
        <div class="h-11 px-3 rounded-lg flex items-center gap-2">
          <PhosphorIconNewspaper class="text-lg" />
          <p class="font-semibold text-sm">News</p>
        </div>
        <div class="h-11 px-3 rounded-lg flex items-center gap-2">
          <PhosphorIconListBullets class="text-lg" />
          <p class="font-semibold text-sm">See More Topics</p>
        </div>
      </div>
      <div class="h-11 px-3 absolute bottom-5 left-0 flex items-center justify-center w-full">
        <button @click="method.modalProfileFnc" class="flex relative items-center justify-between w-full rounded-lg hover:bg-slate-200 px-3 h-full">
          <div class="flex items-center gap-3">
            <img class="w-8 h-8 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSllWfbNNOBU9FDj5S19JluiU2ttdZ3-Z29w&s" alt="" />
            <p class="font-semibold text-sm">Slim Shady</p>
          </div>
          <PhosphorIconDotsThreeCircle class="text-lg" />
          <UiDropDownProfile />
        </button>
      </div>
    </div>
    <slot />
    <div class="sticky w-[25%] p-3 left-0 top-0 h-screen bg-white border-l border-gray-200">
      <div class="flex items-center gap-3 mb-4 bg-slate-100 rounded-full h-10 px-4 border">
        <PhosphorIconMagnifyingGlass class="text-slate-500" />
        <input type="text" placeholder="Search" class="w-full bg-transparent outline-none" />
      </div>
      <div class="border-[1.5px] border-gray-200 rounded-lg px-4 py-3">
        <h1 class="text-xl font-bold mb-5">Who to Follow</h1>
        <div class="rounded-lg mb-5 flex items-center justify-between w-full">
          <div class="flex items-center gap-3">
            <img class="w-10 h-10 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSllWfbNNOBU9FDj5S19JluiU2ttdZ3-Z29w&s" alt="" />
            <div>
              <p class="font-semibold text-sm">Slim Shady</p>
              <p class="text-xs text-gray-500">@slizz</p>
            </div>
          </div>
          <button class="text-sm bg-black px-4 text-white h-8 rounded-full shadow">Follow</button>
        </div>
        <div class="rounded-lg mb-5 flex items-center justify-between w-full">
          <div class="flex items-center gap-3">
            <img class="w-10 h-10 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSllWfbNNOBU9FDj5S19JluiU2ttdZ3-Z29w&s" alt="" />
            <div>
              <p class="font-semibold text-sm">Slim Shady</p>
              <p class="text-xs text-gray-500">@slizz</p>
            </div>
          </div>
          <button class="text-sm bg-black px-4 text-white h-8 rounded-full shadow">Follow</button>
        </div>
        <div class="rounded-lg mb-5 flex items-center justify-between w-full">
          <div class="flex items-center gap-3">
            <img class="w-10 h-10 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSllWfbNNOBU9FDj5S19JluiU2ttdZ3-Z29w&s" alt="" />
            <div>
              <p class="font-semibold text-sm">Slim Shady</p>
              <p class="text-xs text-gray-500">@slizz</p>
            </div>
          </div>
          <button class="text-sm bg-black px-4 text-white h-8 rounded-full shadow">Follow</button>
        </div>
        <RouterLink to="" class="text-sky-600 text-sm">Show More...</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const method = useMethodstore();
</script>
