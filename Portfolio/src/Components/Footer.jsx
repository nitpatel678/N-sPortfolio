import React from "react";

function Footer() {
  return (
    <footer class="py-4 bg-slate-200 text-white">
      <div class="container mx-auto px-6 flex items-center justify-between">
        <div class="text-3xl font-bold text-violet-600 font-ari">
          <span className="text-black">Nitin</span> Patel
          <p className="font-syne text-sm text-black">nitpatle678@gmail.com</p>
        </div>

        <div class="flex items-center justify-center">
  <button 
    onClick="window.location.reload();" 
    class="p-3 rounded-full bg-violet-600 hover:bg-violet-800 transition duration-300">
    <i class="fas fa-redo-alt text-white text-2xl"></i>
  </button>
</div>

      </div>

      <div class="text-center font-bold text-sm text-gray-800 mt-4">
        &copy; 2025 Nitin Patel. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
