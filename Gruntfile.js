'use strict';

module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        svg_sprite: {
            options: {
                mode: {
                    inline: true,
                    symbol: {
                        dest: '',
                        sprite: 'icons.svg'
                    }
                },
                shape: {
                    id: {
                        generator: filepath => filepath.split('/').slice(-1)[0].replace('.svg', '')
                    }
                }
            },
            your_target: {
                src: ['src/**/*.svg'],
                dest: 'dist/',
            }
        }
    });

    grunt.registerTask('default', ['svg_sprite']);
};

