import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";

function NetworkPage() {
  return (
  <div>
  <MaxLimitWrapper>
    <div>
    <h3 className="ml-12 mt-5">Facebook
    <Input className="mt-4" type="email" placeholder="Enter Facebook link" />
    </h3>

    <h3 className="ml-12 mt-5">Twitter
    <Input className="mt-4" type="email" placeholder="Enter Twitter link" />
    </h3>


    <h3 className="ml-12 mt-5">Pinterest
    <Input className="mt-4" type="email" placeholder="Enter Pinterest link" />
    </h3>


    <h3 className="ml-12 mt-5">Insagram
    <Input className="mt-4" type="email" placeholder="Enter Instagram link" />
    </h3>

    <Button className="mt-7">Edit</Button>
  </div>
  </MaxLimitWrapper>
  </div>
  
)}

export default NetworkPage;
