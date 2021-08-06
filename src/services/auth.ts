interface IResponse {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<IResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token:
          "qwoufgwoughwdpiqnjlbevouhpiqjdqwnvjevbwouhdqpidhifph5ou34h524huo3",
        user: {
          name: "Anderson",
          email: "anderson84120@hotmail.com",
        },
      });
    }, 2000);
  });
}
