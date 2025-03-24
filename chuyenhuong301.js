export default {
  async fetch(request) {
    const userAgent = request.headers.get("User-Agent") || "";

    // Kiểm tra Facebook App trên Mobile
    if (/FBAN|FBAV/i.test(userAgent) && /Android|iPhone|iPad|iPod/i.test(userAgent)) {
      return Response.redirect("https://s.shopee.vn/40ScqqJ2cc", 301);
    }
    
    // Chuyển hướng mặc định
    return Response.redirect("https://shopee.vn/lorealparis_officialstore", 301);
  }
};
