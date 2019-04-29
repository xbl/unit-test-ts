const sendEmail = (subject: string, content: string): Promise<any> => {
  // 这里是一个很漫长的网络请求，写入...
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 30000);
  });
};

export default {
  sendEmail
}
