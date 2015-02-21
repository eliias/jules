'use strict';

module.exports = {
    // Test
    'tile1':              {
        src:         '/images/gray1.png',
        width:       128,
        height:      128,
        destroyable: true,
        static:      true,
        health:      40,
        score:       0,
        animations:  {
            'states': {
                frames: undefined
            }
        }
    },

    // Border
    'tile_border_bottom': {
        src:         '/images/tile_border_bottom.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      Number.POSITIVE_INFINITY,
        score:       Number.NEGATIVE_INFINITY,
        animations:  {}
    },
    'tile_border_left':   {
        src:         '/images/tile_border_left.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      Number.POSITIVE_INFINITY,
        score:       Number.NEGATIVE_INFINITY,
        animations:  {}
    },
    'tile_border_right':  {
        src:         '/images/tile_border_right.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      Number.POSITIVE_INFINITY,
        score:       Number.NEGATIVE_INFINITY,
        animations:  {}
    },
    'tile_border_top':    {
        src:         '/images/tile_border_top.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      Number.POSITIVE_INFINITY,
        score:       Number.NEGATIVE_INFINITY,
        animations:  {}
    },

    // Tiles
    'tile_crack_1':       {
        src:         '/images/tile_crack_01.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      40,
        score:       40,
        animations:  {}
    },
    'tile_dirt_1':        {
        src:         '/images/tile_dirt_01.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      40,
        score:       40,
        animations:  {}
    },
    'tile_gas_1':         {
        src:         '/images/tile_gas_01.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      40,
        score:       40,
        animations:  {}
    },
    'tile_gem_1':         {
        src:         '/images/tile_gem_01.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      40,
        score:       40,
        animations:  {}
    },
    'tile_stone_1':       {
        src:         '/images/tile_stone_01.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      40,
        score:       40,
        animations:  {}
    },
    'tile_wood_1':        {
        src:         '/images/tile_wood_01.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      40,
        score:       40,
        animations:  {}
    }
};
