import type { editor } from 'monaco-editor';

export const theme: editor.IStandaloneThemeData = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    {
      background: '000000',
      token: '',
    },
    {
      foreground: '969896',
      token: 'comment',
    },
    {
      foreground: 'eeeeee',
      token: 'keyword.operator.class',
    },
    {
      foreground: 'eeeeee',
      token: 'constant.other',
    },
    {
      foreground: 'eeeeee',
      token: 'source.php.embedded.line',
    },
    {
      foreground: 'd54e53',
      token: 'variable',
    },
    {
      foreground: 'd54e53',
      token: 'support.other.variable',
    },
    {
      foreground: 'd54e53',
      token: 'string.other.link',
    },
    {
      foreground: 'd54e53',
      token: 'string.regexp',
    },
    {
      foreground: 'd54e53',
      token: 'entity.name.tag',
    },
    {
      foreground: 'd54e53',
      token: 'entity.other.attribute-name',
    },
    {
      foreground: 'd54e53',
      token: 'meta.tag',
    },
    {
      foreground: 'd54e53',
      token: 'declaration.tag',
    },
    {
      foreground: 'd54e53',
      token: 'markup.deleted.git_gutter',
    },
    {
      foreground: 'e78c45',
      token: 'constant.numeric',
    },
    {
      foreground: 'e78c45',
      token: 'constant.language',
    },
    {
      foreground: 'e78c45',
      token: 'support.constant',
    },
    {
      foreground: 'e78c45',
      token: 'constant.character',
    },
    {
      foreground: 'e78c45',
      token: 'variable.parameter',
    },
    {
      foreground: 'e78c45',
      token: 'punctuation.section.embedded',
    },
    {
      foreground: 'e78c45',
      token: 'keyword.other.unit',
    },
    {
      foreground: 'e7c547',
      token: 'entity.name.class',
    },
    {
      foreground: 'e7c547',
      token: 'entity.name.type.class',
    },
    {
      foreground: 'e7c547',
      token: 'support.type',
    },
    {
      foreground: 'e7c547',
      token: 'support.class',
    },
    {
      foreground: 'b9ca4a',
      token: 'string',
    },
    {
      foreground: 'b9ca4a',
      token: 'constant.other.symbol',
    },
    {
      foreground: 'b9ca4a',
      token: 'entity.other.inherited-class',
    },
    {
      foreground: 'b9ca4a',
      token: 'markup.heading',
    },
    {
      foreground: 'b9ca4a',
      token: 'markup.inserted.git_gutter',
    },
    {
      foreground: '70c0b1',
      token: 'constructor.identifier',
    },
    {
      foreground: '70c0b1',
      token: 'keyword.operator',
    },
    {
      foreground: '70c0b1',
      token: 'constant.other.color',
    },
    {
      foreground: '7aa6da',
      token: 'entity.name.function',
    },
    {
      foreground: '7aa6da',
      token: 'meta.function-call',
    },
    {
      foreground: '7aa6da',
      token: 'support.function',
    },
    {
      foreground: '7aa6da',
      token: 'keyword.other.special-method',
    },
    {
      foreground: '7aa6da',
      token: 'meta.block-level',
    },
    {
      foreground: '7aa6da',
      token: 'markup.changed.git_gutter',
    },
    {
      foreground: 'c397d8',
      token: 'keyword',
    },
    {
      foreground: 'c397d8',
      token: 'storage',
    },
    {
      foreground: 'c397d8',
      token: 'storage.type',
    },
    {
      foreground: 'c397d8',
      token: 'entity.name.tag.css',
    },
    {
      foreground: 'ced2cf',
      background: 'df5f5f',
      token: 'invalid',
    },
    {
      foreground: 'ced2cf',
      background: '82a3bf',
      token: 'meta.separator',
    },
    {
      foreground: 'ced2cf',
      background: 'b798bf',
      token: 'invalid.deprecated',
    },
    {
      foreground: 'ffffff',
      token: 'markup.inserted.diff',
    },
    {
      foreground: 'ffffff',
      token: 'markup.deleted.diff',
    },
    {
      foreground: 'ffffff',
      token: 'meta.diff.header.to-file',
    },
    {
      foreground: 'ffffff',
      token: 'meta.diff.header.from-file',
    },
    {
      foreground: '718c00',
      token: 'markup.inserted.diff',
    },
    {
      foreground: '718c00',
      token: 'meta.diff.header.to-file',
    },
    {
      foreground: 'c82829',
      token: 'markup.deleted.diff',
    },
    {
      foreground: 'c82829',
      token: 'meta.diff.header.from-file',
    },
    {
      foreground: 'ffffff',
      background: '4271ae',
      token: 'meta.diff.header.from-file',
    },
    {
      foreground: 'ffffff',
      background: '4271ae',
      token: 'meta.diff.header.to-file',
    },
    {
      foreground: '3e999f',
      fontStyle: 'italic',
      token: 'meta.diff.range',
    },
  ],
  colors: {
    'editor.foreground': '#DEDEDE',
    'editor.background': '#00000077',
    'editor.selectionBackground': '#212121',
    'editor.lineHighlightBackground': '#2A2A2A',
    'editorCursor.foreground': '#9F9F9F',
    'editorWhitespace.foreground': '#343434',
  },
};
