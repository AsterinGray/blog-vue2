import { shallowMount } from "@vue/test-utils";
import PostCard from "@/components/PostCard.vue";

describe("PostCard", () => {
  it("Render a Post Card Component", () => {
    const wrapper = shallowMount(PostCard, {
      props: {
        id: 1,
        title: "This is a title",
        body: "This is a body",
        userId: 1,
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes("title").valueOf(wrapper.props.title));
    expect(wrapper.classes("detail").valueOf(wrapper.props.body));
    expect(wrapper.classes("info").valueOf(wrapper.props.userId));
  });
});
