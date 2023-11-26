export class JWTUtils {
  static resolveJWTToken<TypePayload>(
    token?: string
  ): JWTBody<TypePayload> | undefined {
    if (!token) {
      return undefined;
    }
    const splited = token.split(".");
    return {
      header: splited[0]
        ? Buffer.from(splited[0], "base64").toString("utf8")
        : undefined,
      payload: splited[1]
        ? (JSON.parse(
            Buffer.from(splited[1], "base64").toString("utf8")
          ) as TypePayload)
        : undefined,
      verifySignature: splited[2]
        ? Buffer.from(splited[2], "base64").toString("utf8")
        : undefined,
    } as JWTBody<TypePayload>;
  }
}

export class JWTBody<TypePayload> {
  header?: string;
  payload?: TypePayload;
  verifySignature?: string;
}
