from behave import given, when, then, step
from selenium.webdriver.common.keys import Keys
import time

@given('I navigate to google')
def step_impl(context):
    context.browser.get("https://google.com")

@when('I enter {string} into the search bar')
def step_impl(context, string):  # -- NOTE: number is converted into integer
    search_bar = context.browser.find_element_by_id("lst-ib")
    search_bar.send_keys(string)

@when('I clear the search bar')
def step_impl(context):  # -- NOTE: number is converted into integer
    search_bar = context.browser.find_element_by_id("lst-ib")
    search_bar.send_keys(Keys.CONTROL, "a")
    search_bar.send_keys(Keys.DELETE)

@when('I wait for {number:d} seconds')
def step_impl(context, number):
    time.sleep(float(number))

@then('The page should contain {string}')
def step_impl(context, string):
    html_tags = context.browser.find_elements_by_tag_name("html")
    page_text = html_tags[0].text
    if string in page_text:
        return True
    else:
        return False