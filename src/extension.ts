import * as vscode from "vscode";
import { registerConvertSymbols } from "./commands/convertSymbols";

export function activate(context: vscode.ExtensionContext) {
  registerConvertSymbols(context);
}

export function deactivate() {}
