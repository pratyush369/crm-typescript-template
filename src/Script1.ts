const MyCompany = {
  /**
   * This function is triggered on form load.
   * @param executionContext - The context of the event.
   */
  onFormLoad: (executionContext: Xrm.Events.LoadEventContext): void => {
    // Get the form context
    const formContext = executionContext.getFormContext();

    // Log the form context and other details
    console.log('Form Context:', formContext);
  },
};
Object.defineProperty(window, 'MyCompany', {
  value: MyCompany,
  writable: false,
  enumerable: true,
  configurable: false,
});
