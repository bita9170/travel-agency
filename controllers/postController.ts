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

    const res = await axios.get(`/api/posts`, {
      params: { postId },
    });

    if (res.status === 200) {
      return res.data.posts;
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
 *  CREATE post
 */
export async function createPost(
  title: string,
  content: string,
  author: string,
  image: string,
  locationId: string,
  userId: string
) {
  console.log("createPost function called");
  try {
    if (!title || !content || !author || !image || !userId || !locationId) {
      console.error("Missing required fields");
      return {
        success: false,
        message: "Error in saving location",
      };
    }

    const res = await axios.post("/api/posts", {
      title,
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
  console.log(updatedData);
  try {
    if (!postId) {
      console.error("Missing required fields");
      return {
        message: "Error in update post",
        value: postId,
      };
    }

    const res = await axios.put("/api/posts", { postId, updatedData });

    console.log(res);
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

export async function getLastPosts(limit: number = 5) {
  try {
    const res = await axios.get(`/api/posts`, {
      params: { limit },
    });

    if (res.status === 200) {
      return res.data.posts;
    } else {
      return {
        message: "Error in getting the latest posts",
        value: res.data,
      };
    }
  } catch (error) {
    console.error("Error in getting the latest posts:", error);
    return {
      message: "Internal Server Error",
      value: error,
    };
  }
}
