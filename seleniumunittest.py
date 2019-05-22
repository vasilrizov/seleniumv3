import unittest
from selenium import webdriver


class SearchText(unittest.TestCase):
    @classmethod
    def setUpClass(inst):
        # create a new Firefox session
        inst.driver = webdriver.Chrome("C:\\Users\\vasilpc\\PycharmProjects\\untitled2\\driver\\chromedriver.exe")
        inst.driver.implicitly_wait(30)
        inst.driver.maximize_window()
        # navigate to the application home page
        inst.driver.get("http://www.google.com/")
        inst.driver.title

    def test_search_by_text(self):
        # get the search textbox
        self.search_field = self.driver.find_element_by_name("q")
        self.search_field.clear()
        # enter search keyword and submit
        self.search_field.send_keys("wassup my nathans")
        self.search_field.submit()

        lists = self.driver.find_elements_by_class_name("r")
        self.assertEqual(11, len(lists))

    def test_search_by_name(self):

        self.search_field = self.driver.find_element_by_name("q")

        self.search_field.send_keys("Python class")

        list_new = self.driver.find_elements_by_class_name("r")
        self.assertEqual(11, len(list_new))

    @classmethod
    def tearDownClass(inst):
        # close the browser window
        inst.driver.quit()


if __name__ == '__main__':
    unittest.main()