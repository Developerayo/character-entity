import * as vscode from "vscode";
import { convertText } from "../utils/convertText";

export function registerConvertSymbols(context: vscode.ExtensionContext) {
  const convertSymbols = vscode.commands.registerCommand(
    "character-entity.convertSymbols",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        editor.edit((editBuilder) => {
          editor.selections.forEach((selection) => {
            if (!selection.isEmpty) {
              const text = editor.document.getText(selection);
              const modifiedText = convertText(text);
              editBuilder.replace(selection, modifiedText);
            }
          });
        });
      }
    }
  );

  context.subscriptions.push(convertSymbols);
}
