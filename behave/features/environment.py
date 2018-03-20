from selenium import webdriver
from selenium.webdriver.chrome.options import Options

def before_scenario(context, scenario):

    chrome_options = Options()
    # context.browser = webdriver.Chrome(chrome_options=chrome_options)

    desired_capabilities = {
        'browserName': 'chrome',
        'name': 'selenium_test',
    }

    context.browser = webdriver.Remote(
        command_executor='http://localhost:4444/wd/hub',
        desired_capabilities=desired_capabilities
    )

    context.browser.set_window_size(1280, 1024)
    context.session_id = context.browser.session_id

def after_scenario(context, scenario):
    context.browser.quit()