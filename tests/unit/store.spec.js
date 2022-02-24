import axios from "axios";
import { mutations, getters, actions } from "../../src/store/index";

describe("mutations", () => {
  it("setPosts", () => {
    const state = { posts: [] };

    const data = [
      {
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
      },
      {
        postId: 1,
        id: 2,
        name: "quo vero reiciendis velit similique earum",
        email: "Jayne_Kuhic@sydney.com",
        body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
      },
    ];

    mutations.setPosts(state, data);
    expect(state.posts).toEqual(data);
  });

  it("setComments", () => {
    const state = { comments: [] };

    const data = [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
    ];

    mutations.setComments(state, data);
    expect(state.comments).toEqual(data);
  });
});

describe("getters", () => {
  it("getPosts", () => {
    const state = {
      posts: [
        {
          postId: 1,
          id: 1,
          name: "id labore ex et quam laborum",
          email: "Eliseo@gardner.biz",
          body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
        },
        {
          postId: 1,
          id: 2,
          name: "quo vero reiciendis velit similique earum",
          email: "Jayne_Kuhic@sydney.com",
          body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
        },
      ],
    };

    expect(getters.getPosts(state)).toEqual(state.posts);
  });

  it("getPostById", () => {
    const state = {
      posts: [
        {
          postId: 1,
          id: 1,
          name: "id labore ex et quam laborum",
          email: "Eliseo@gardner.biz",
          body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
        },
        {
          postId: 1,
          id: 2,
          name: "quo vero reiciendis velit similique earum",
          email: "Jayne_Kuhic@sydney.com",
          body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
        },
      ],
    };

    expect(getters.getPostById(state)(2)).toEqual(state.posts[1]);
  });

  it("getComments", () => {
    const state = {
      comments: [
        {
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
        {
          userId: 1,
          id: 2,
          title: "qui est esse",
          body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        },
      ],
    };

    expect(getters.getComments(state)).toEqual(state.comments);
  });
});

describe("actions", () => {
  it("getAllPosts action called commit with expected data", async () => {
    const commit = jest.fn();
    await actions.getAllPosts({ commit });
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

    expect(commit).toHaveBeenCalledWith("setPosts", res.data);
  });

  it("getAllComments action called commit with expected data", async () => {
    const commit = jest.fn();
    await actions.getAllComments({ commit }, 1);
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/1/comments`
    );

    expect(commit).toHaveBeenCalledWith("setComments", res.data);
  });
});
