import ExpoModulesCore

public class SpeedometerModule: Module {
  public func definition() -> ModuleDefinition {
    Name("Speedometer")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("hello") {
      return "Hello world! 👋"
    }
  }
}
