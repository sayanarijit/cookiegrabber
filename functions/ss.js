const HTML = `
<html>
  <body>
    <p>Let me present your server side cookies...</p>
    <pre>{{sscookies}}</pre>
  </body>
</html>
`;

export function onRequest(context) {
  let html = HTML.replace(
    "{{sscookies}}",
    (context.request.headers.get("Cookie") || "")
      .toString()
      .replaceAll("; ", "\n")
  );

  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  });
}
