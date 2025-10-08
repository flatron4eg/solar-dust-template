declare module "http://.../" {
    class Engine {
    World: World;
    Signal: Signals;

    private stopped: boolean;
    private paused: boolean;

    constructor(
      config: EngineConfig,
      components: Record<string, BaseClass>,
      queries: string[]
    );

    addModule(name: string, module: any): void;
    start(): void;
    stop(): void;
    pause(): void;
    unpause(): void;
  }

  export = { Engine }
}