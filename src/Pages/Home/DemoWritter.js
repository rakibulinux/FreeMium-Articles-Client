import React from 'react';

const DemoWritter = ({writter}) => {
  
  console.log(writter)
    return (
        <div>
      <a
  href="/"
  class="relative block overflow-hidden rounded-lg border border-gray-100 p-8"
>
  

  <div class="justify-between sm:flex">
    <div>
      <h3 class="text-xl font-bold text-gray-900">
        Building a SaaS product as a software developer
      </h3>

      <p class="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
    </div>

    <div class="ml-3 hidden flex-shrink-0 sm:block">
      <img
        alt="Paul Clapton"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        class="h-16 w-16 rounded-lg object-cover shadow-sm"
      />
    </div>
  </div>

  <div class="mt-4 sm:pr-8">
    <p class="text-sm text-gray-500">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
      provident a, ipsa maiores deleniti consectetur nobis et eaque.
    </p>
  </div>

  <dl class="mt-6 flex">
    <div class="flex flex-col-reverse">
    
      <dd class="text-xs text-gray-700">31st June, 2021</dd>
    </div>

    <div class="ml-3 flex flex-col-reverse sm:ml-6">
      
      <dd class="text-xs text-gray-700">3 minute</dd>
    </div>
  </dl>
</a>

         </div>
    );
};

export default DemoWritter;