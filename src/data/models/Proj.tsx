export interface IProject {
  name: string;
  github: string;
  url: string;
  id: string;
  image: string;
  short_description: string;
}

export interface ITag {
  name: string;
  zipball_url: string;
  tarball_url: string;
  commit: ICommit;
  node_id: string;
}

export interface ICommit {
  sha: string;
  url: string;
}
