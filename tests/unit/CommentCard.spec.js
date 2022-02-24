import { shallowMount } from "@vue/test-utils";
import CommentCard from "@/components/CommentCard.vue";

describe("CommentCard", () => {
  it("Render a Comment Card Component", () => {
    const wrapper = shallowMount(CommentCard, {
      props: {
        email: "user@mail.com",
        body: "Hello World I am Here",
        name: "User User",
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes("name").valueOf(wrapper.props.name));
    expect(wrapper.classes("email").valueOf(wrapper.props.email));
    expect(wrapper.classes("content").valueOf(wrapper.props.body));
  });
});
