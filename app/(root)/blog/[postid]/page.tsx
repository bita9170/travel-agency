"use client";

import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div>
      <div>
        <div>
          <Image src="/" alt="avatar" width={200} height={200} />
        </div>
        <div>John Doe</div>
      </div>
      <div>
        <form>
          <label>Username</label>
          <input type="text" name="title" placeholder="some text here"></input>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="johndoe@email.com"
          ></input>
          <label>Password</label>
          <input type="password" name="password"></input>
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+123456789"></input>
          <label>Adress</label>
          <textarea name="address" placeholder="adress"></textarea>
          <label>isAdmin</label>
          <select name="isActive" id="isActive">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label>isActive?</label>
          <select name="isActive" id="isActive">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
