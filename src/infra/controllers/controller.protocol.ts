export interface RequestProtocol {
  body: any;
  params: any;
  query: any;
  headers: any;
}

export interface ResponseProtocol {
  status(statusCode: number): ResponseProtocol;
  json(data: any): ResponseProtocol;
  send(data: any): ResponseProtocol;
}
