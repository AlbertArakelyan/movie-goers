import {IMovie} from "@/common/interfaces";

export type ContainerPropTypes = {}

export type ViewPropTypes = {
  list: IMovie[],
  error: string | undefined,
  isFetching: boolean,
}