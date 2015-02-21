'use strict';

module.exports = {
    // Border
    'tile_border_bottom':  {
        src:         '/images/tile_border_bottom.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      Number.POSITIVE_INFINITY,
        score:       Number.NEGATIVE_INFINITY,
        animations:  {}
    },
    'tile_border_left':    {
        src:         '/images/tile_border_left.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      Number.POSITIVE_INFINITY,
        score:       Number.NEGATIVE_INFINITY,
        animations:  {}
    },
    'tile_border_right':   {
        src:         '/images/tile_border_right.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      Number.POSITIVE_INFINITY,
        score:       Number.NEGATIVE_INFINITY,
        animations:  {}
    },
    'tile_border_top':     {
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
    'tile_crack_square_1': {
        src:         '/images/tile_crack_01.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      1000,
        score:       40,
        animations:  {
            'states': [0, 1, 2, 3]
        }
    },
    'tile_dirt_square_1':  {
        src:         '/images/tile_dirt_01.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      400,
        score:       40,
        animations:  {
            'states': [0, 1, 2, 3]
        }
    },
    'tile_gas_square_1':   {
        src:         '/images/tile_gas_01.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      200,
        score:       40,
        animations:  {}
    },
    'tile_gem_square_1':   {
        src:         '/images/tile_gem_01.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      1200,
        score:       40,
        animations:  {}
    },
    'tile_stone_square_1': {
        src:         '/images/tile_stone_01.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      600,
        score:       40,
        animations:  {
            'states': [0, 1, 2, 3]
        }
    },
    'tile_wood_square_1':  {
        src:         '/images/tile_wood_01.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      200,
        score:       40,
        animations:  {
            'states': [0, 1, 2, 3]
        }
    },
    'tile_gem_round_1':    {
        src:         '/images/tile_mineral_128_1.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      1200,
        score:       40,
        animations:  {
            'states': [0, 1, 2, 3]
        }
    },
    'tile_gem_round_2':    {
        src:         '/images/tile_mineral_128_2.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      1200,
        score:       40,
        animations:  {
            'states': [0, 1, 2, 3]
        }
    },
    'tile_dirt_round_1':   {
        src:         '/images/tile_rundeErde_128_1.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      400,
        score:       40,
        bounding:    {
            type:   'circle',
            radius: 64
        },
        animations:  {
            'states': [0, 1, 2, 3]
        }
    },
    'tile_dirt_round_2':   {
        src:         '/images/tile_rundeErde_128_2.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      400,
        score:       40,
        bounding:    {
            type:   'circle',
            radius: 64
        },
        animations:  {
            'states': [0, 1, 2, 3]
        }
    },
    'tile_stone_round_1':  {
        src:         '/images/tile_runderStein_128_1.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      600,
        score:       40,
        bounding:    {
            type:   'circle',
            radius: 64
        },
        animations:  {
            'states': [0, 1, 2, 3]
        }
    },
    'tile_stone_round_2':  {
        src:         '/images/tile_runderStein_128_2.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      600,
        score:       40,
        bounding:    {
            type:   'circle',
            radius: 64
        },
        animations:  {
            'states': [0, 1, 2, 3]
        }
    },
    'tile_stone_round_3':  {
        src:         '/images/tile_runderStein_128_3.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      600,
        score:       40,
        bounding:    {
            type:   'circle',
            radius: 64
        },
        animations:  {
            'states': [0, 1, 2, 3]
        }
    },
    'tile_stone_round_4':  {
        src:         '/images/tile_runderStein_128_4.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      600,
        score:       40,
        bounding:    {
            type:   'circle',
            radius: 64
        },
        animations:  {
            'states': [0, 1, 2, 3]
        }
    },
    'tile_gas_round_1':    {
        src:         '/images/tile_rundesGas_128.png',
        width:       128,
        height:      128,
        destroyable: true,
        static:      true,
        health:      200,
        score:       40,
        enemy:       true,
        bounding:    {
            type:   'circle',
            radius: 64
        },
        animations:  {}
    },
    'tile_gold_round_1':   {
        src:         '/images/tile_rundesGold.png',
        width:       128,
        height:      128,
        destroyable: false,
        static:      true,
        health:      900,
        score:       40,
        bounding:    {
            type:   'circle',
            radius: 64
        },
        animations:  {
            'states': [0, 1, 2, 3]
        }
    }
};
