// @flow

// flow-typed signature: 51c270cc35383a9975ac6e68c2be4ebe
// flow-typed version: <<STUB>>/timer-stopwatch_v0.x.x/flow_v0.72.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'timer-stopwatch'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module 'timer-stopwatch' {
    declare class Stopwatch {
        constructor(time: number): Stopwatch,
        start(): void,
        stop(): void,
        onDone(callBack: () => void): void,
    }

    declare module.exports: (time: number) => Stopwatch;
}

/*
/!**
 * We include stubs for each file inside this npm package in case you need to
 * require those files directly. Feel free to delete any files that aren't
 * needed.
 *!/
declare module 'timer-stopwatch/debug' {
  declare module.exports: any;
}

declare module 'timer-stopwatch/Gruntfile' {
  declare module.exports: any;
}

declare module 'timer-stopwatch/lib/Stopwatch' {
  declare module.exports: any;
}

declare module 'timer-stopwatch/test/unit/Stopwatch.spec' {
  declare module.exports: any;
}

// Filename aliases
declare module 'timer-stopwatch/debug.js' {
  declare module.exports: $Exports<'timer-stopwatch/debug'>;
}
declare module 'timer-stopwatch/Gruntfile.js' {
  declare module.exports: $Exports<'timer-stopwatch/Gruntfile'>;
}
declare module 'timer-stopwatch/index' {
  declare module.exports: $Exports<'timer-stopwatch'>;
}
declare module 'timer-stopwatch/index.js' {
  declare module.exports: $Exports<'timer-stopwatch'>;
}
declare module 'timer-stopwatch/lib/Stopwatch.js' {
  declare module.exports: $Exports<'timer-stopwatch/lib/Stopwatch'>;
}
declare module 'timer-stopwatch/test/unit/Stopwatch.spec.js' {
  declare module.exports: $Exports<'timer-stopwatch/test/unit/Stopwatch.spec'>;
}
*/