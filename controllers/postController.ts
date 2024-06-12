import { baseUrl } from "@/lib/utils";
import axios from "axios";

/**
 *  GET post by ID
 */
export async function getPostById(postId: string) {
  try {
    if (!postId) {
      console.error("Missing required fields");
      return {
        message: "Error in get post by id",
        value: postId,
      };
    }

    const res = await fetch(`${baseUrl}/api/posts?postId=${postId}`, {
      cache: "default",
      method: "GET",
    });

    const data = await res.json();

    if (res.status === 200) {
      return data.posts;
    } else {
      return {
        message: "Error in get post by id",
        value: IdleDeadline,
      };
    }
  } catch (error) {
    return {
      message: "",
      value: error,
    };
  }
}

/**
 *  GET Last post - default 5
 */
export async function getLastPosts(limit: number = 5) {
  try {
    if (!limit) {
      console.error("Missing required fields");
      return {
        message: "Error in get last post by",
        value: limit,
      };
    }

    const res = await fetch(`${baseUrl}/api/posts/?limit=${limit}`, {
      cache: "default",
      method: "GET",
    });

    const data = await res.json();

    if (res.status === 200) {
      return data.posts;
    } else {
      return {
        message: "Error in getting the latest posts",
        value: IdleDeadline,
      };
    }
  } catch (error) {
    return {
      message: "",
      value: error,
    };
  }
}

/**
 *  CREATE post
 */
export async function createPost(
  title: string,
  subtitle: string,
  content: string,
  author: string,
  image: string,
  locationId: string,
  userId: string
) {
  console.log("createPost function called");
  try {
    if (
      !title ||
      !subtitle ||
      !content ||
      !author ||
      !image ||
      !userId ||
      !locationId
    ) {
      console.error("Missing required fields");
      return {
        success: false,
        message: "Error in saving location",
      };
    }

    const res = await axios.post("/api/posts", {
      title,
      subtitle,
      content,
      author,
      image,
      locationId,
      userId,
    });

    if (res.status === 201) {
      return {
        success: true,
        message: "The post has been added",
        value: res.data.post,
      };
    } else {
      return {
        success: false,
        message: "Error in saving post",
      };
    }
  } catch (error) {
    console.error("Error creating post:", error);
    return {
      success: false,
      message: "Error in saving post",
    };
  }
}

/**
 * UPDATE post
 */
export async function updatePost(postId: string, updatedData: any) {
  console.log("updatePost function called");

  try {
    if (!postId) {
      console.error("Missing required fields");
      return {
        message: "Error in update post",
        value: postId,
      };
    }

    const res = await axios.put("/api/posts", { postId, updatedData });

    if (res.status === 200) {
      return {
        success: true,
        message: "The post has been updated",
        value: res.data.post,
      };
    } else {
      return {
        message: "Error in update post",
        value: res.data,
      };
    }
  } catch (error) {
    console.error(error);
    return {
      message: "Internal Server Error",
      value: error,
    };
  }
}

/**
 * DELETE Post
 */
export async function deletePost(postId: string) {
  try {
    if (!postId) {
      console.error("Missing required fields");
      return {
        message: "Error in saving location",
        value: postId,
      };
    }

    const res = await axios.delete("/api/posts", {
      params: { postId },
    });

    if (res.status === 200) {
      return {
        message: "The post has been removed from database",
        value: "",
      };
    } else {
      return {
        message: "Error in delete post",
        value: IdleDeadline,
      };
    }
  } catch (error) {
    return {
      message: "",
      value: "",
    };
  }
}
