export default async (request, context) => {
  // すべてのメソッド、すべてのパスからのアクセスに対し、一律で 410 を返却する
  return new Response("410 Gone - This resource is permanently removed.", {
    status: 410,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};

// 全てのパス (/*) にこの関数を適用する設定
export const config = {
  path: "/*",
};
