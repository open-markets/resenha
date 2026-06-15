import { Tag } from 'nesoi/lib/engine/dependency';

export default class PluginVirtualModule {

  public externals = {
    jobs: [] as Tag[]
  };

  constructor(
    public name: string
  ) {}

}